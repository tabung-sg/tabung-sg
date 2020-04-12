class Mosque < ApplicationRecord
    validates :name, :full_address, :phone, presence: true

    has_one_attached :qr_code_image
end
