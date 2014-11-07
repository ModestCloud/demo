class UsersController < ApplicationController
  def index
    render json: Users.all
  end

  def show
    render json: Users.find(params[:id])
  end

  def create
    @user = Users.new(params[:user])
    @user.save!
    render json: @user, status: :created
  end

  def destroy
    @user = Users.find(params[:id])
    @user.destroy
    render json: @user
  end

  def update
    @user = Users.find(params[:id])
    if @user.update_attributes(params[:user])
      render json: @user
    else
      render json: @user
    end

  end


end
