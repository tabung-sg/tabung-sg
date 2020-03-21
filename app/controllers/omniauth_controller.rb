class OmniauthController < ApplicationController
  def google
  end

  def failure
    flash[:failure] = "Error when logging in: #{failure_message}"
  end

  private

  # This method is copied from Devise:
  # https://github.com/heartcombo/devise/blob/769506e96cd45b36a311eeca293ce0228c58e5f3/app/controllers/devise/omniauth_callbacks_controller.rb#L21
  def failure_message
    exception = request.respond_to?(:get_header) ? request.get_header("omniauth.error") : request.env["omniauth.error"]
    error   = exception.error_reason if exception.respond_to?(:error_reason)
    error ||= exception.error        if exception.respond_to?(:error)
    error ||= (request.respond_to?(:get_header) ? request.get_header("omniauth.error.type") : request.env["omniauth.error.type"]).to_s
    error.to_s.humanize if error
  end
end