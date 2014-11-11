class UsersController < ApplicationController
  def index
    render json: Users.all
  end

  def show
    render json: Users.find(params[:id])
  end

  def create
    @user = Users.new(params[:user])
    if @user.save!
      render json: @user, status: :created
    else
      render json: :failure
    end
  end

  def destroy
    @user = Users.find(params[:id])
    if @user.destroy
      render json: @user
    else
      render json: :failure
    end
  end

  def update
    @user = Users.find(params[:id])
    if @user.update_attributes(params[:user])
      render json: @user
    else
      render json: :failure
    end

  end


end
