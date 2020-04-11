class Mosque < ApplicationRecord
    validates :name, :full_address, :phone, presence:true
end
