<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VendorMail extends Mailable
{
    use Queueable, SerializesModels;
  
    public $mailData;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        $this->mailData = $mailData;
    }

    public function build()
    {
        return $this->subject('Mail from ItSolutionStuff.com')
                    ->view('emails.demoMail');
    }
}
