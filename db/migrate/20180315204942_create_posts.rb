class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :body

      t.timestamps
    end
  end
end
