class UsersController < ApplicationController
  def index
    render json: Users.all
  end

  def show
    render json: Users.find(params[:id])
  end
end
