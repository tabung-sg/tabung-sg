ActiveAdmin.register Mosque do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters

  permit_params :name, :full_address, :phone, :email, :website, :description
  
end
