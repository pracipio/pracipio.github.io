<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Thoughtworthy extends CI_Controller {
  public function index()
  {		
    $this->load->view('templates/header.main.html');
    $this->load->view('thoughtworthy.html');
    //    $this->load->view('templates/footer.html');
    $this->load->view('templates/footer.bottom.html');
  }
}
