class ArticlesController < ApplicationController
  def index
      @units = Unit.all
  end
end
