class CreateMosques < ActiveRecord::Migration[6.0]
  def change
    create_table :mosques do |t|
      t.string  :name
      t.string  :full_address
      t.integer :phone
      t.string  :email
      t.string  :website
      t.text    :description
      t.timestamps
    end
  end
end
