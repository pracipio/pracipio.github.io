<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class About extends CI_Controller {
  public function index()
  {		
    $this->load->view('templates/header.main.html');
    $this->load->view('about.html');
    //    $this->load->view('templates/footer.html');
    $this->load->view('templates/footer.bottom.html');
  }
}
