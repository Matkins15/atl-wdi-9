class AddCommentIdToUnits < ActiveRecord::Migration[5.0]
  def change
    add_column :units, :comment_id, :integer
  end
end
