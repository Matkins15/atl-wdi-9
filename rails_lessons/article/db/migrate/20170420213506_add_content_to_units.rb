class AddContentToUnits < ActiveRecord::Migration[5.0]
  def change
    add_column :units, :content, :text
  end
end
