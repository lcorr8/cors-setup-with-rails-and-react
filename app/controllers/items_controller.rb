class ItemsController < ApplicationController 

  def index 
    @items = Item.all
    render json: @items
  end 

  def create
    @item = Item.new(item_params) 
    if @item.save 
      render json: @item 
    else 
      render json: { error: { message: 'hi' } }
    end 
  end

  private 
  
  def item_params 
    params.require(:item).permit(:title)
  end


end