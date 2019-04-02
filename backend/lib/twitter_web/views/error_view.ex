defmodule TwitterWeb.ErrorView do
  use TwitterWeb, :view

  def template_not_found(template, _assigns) do
    %{errors: %{detail: Phoenix.Controller.status_message_from_template(template)}}
  end

  def render("401.json", %{message: message}) do
    %{
      errors: %{
        detail: message
      }
    }
  end

  def render("404.json", _assigns) do
    %{
      errors: %{
        detail: "Endpoint not found"
      }
    }
  end

  def render("500.json", _assigns) do
    %{
      errors: %{
        detail: "Internal Server Error :("
      }
    }
  end
end
