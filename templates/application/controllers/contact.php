<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Contact extends CI_Controller {
  public function index()
  {		

    $this->load->helper('form');  
    //    $this->load->helper('my_form_helper');
    $this->load->view('templates/header.main.html');
    $this->load->view('contact.html');
    //    $this->load->view('templates/footer.html');
    $this->load->view('templates/footer.bottom.html');

  }
}
  /*
public function sendmail()
  {		
    //email dummy email
    $this->load->library('email');

    $this->email->from('info@pracipio.com', 'Your Name');
    $this->email->to('selwyn.mccracken@gmail.com'); 

    $this->email->subject('Contact alert!!!');
    $this->email->message('Testing the email class.');	

    $this->email->send();

    //echo $this->email->print_debugger();

    }*/

