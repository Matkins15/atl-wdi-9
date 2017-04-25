class StaticPagesController < ApplicationController
    before_action :authenticate_user!, only: [:support]
    before_action :redirect_unless_admin, only: [:configure]

  def home
  end

  def welcome

  end

  def support
  end

  def configure
  end

  # private
  #
  # 	def redirect_unless_admin
  # 		unless user_signed_in? && current_user.is_admin?
  # 			redirect_to :home
  # 		end
  # 	end
end
