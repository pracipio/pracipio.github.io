<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class How_we_help extends CI_Controller {
  public function index()
  {		
    $this->load->view('templates/header.main.html');
    $this->load->view('how_we_help.html');
    //    $this->load->view('templates/footer.html');
    $this->load->view('templates/footer.bottom.html');
  }
}
