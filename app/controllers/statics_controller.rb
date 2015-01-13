class StaticsController < ApplicationController
  
  def about 
  end
  
  def resume
  end
  
  def download 
    html = render_to_string(:action => :show, :file => "/Users/rekhatenjarla/Desktop/MAIN-res/app/views/statics/about.html.erb") 
    pdf = WickedPdf.new.pdf_from_string(html) 
    send_data(pdf, 
      :filename    => "my_pdf_name.pdf", 
      :disposition => 'attachment') 
  end
   
   
end