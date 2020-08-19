class Api::V1::TodoItemsController < ApplicationController
  before_action :set_todo_item, only: [:show, :edit, :update, :destroy]

  def index
    @todo_items = current_user.todo_items
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_todo_item
    @todo_item = TodoItem.find(params[:id])
  end

  def authorized?
    @todo_item.user == current_user
  end

  def handle_unauthorized
    unless authorized?
      respond_to do |format|
        format.json { render :unauthorized, status: 401 }
      end
    end
  end
end
