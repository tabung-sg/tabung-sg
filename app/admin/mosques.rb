ActiveAdmin.register Mosque do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters

  permit_params :name, :full_address, :phone, :email, :website, :description, :qr_code_image, :image

  form title: 'New Mosque' do |f|
    inputs do
      input :name
      input :full_address
      input :phone
      input :email
      input :website
      input :description
      input :qr_code_image, as: :file
      input :image, as: :file
    end
    actions
  end

  show do
    attributes_table do
      row :name
      row :full_address
      row :phone
      row :email
      row :website
      row :description
      row :image do |mosque|
        image_tag url_for(mosque.image), {
          style: 'max-width:400px;max-height:400px;width:auto;height:auto'
        }
      end
      row :qr_code_image do |mosque|
        image_tag url_for(mosque.qr_code_image), size: 100
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end
end
