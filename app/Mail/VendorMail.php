<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
<<<<<<< HEAD
=======
use Illuminate\Contracts\Queue\ShouldQueue;
>>>>>>> cf2af62 (wahyu)
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VendorMail extends Mailable
{
    use Queueable, SerializesModels;
<<<<<<< HEAD
  
    public $mailData;
=======
>>>>>>> cf2af62 (wahyu)

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
<<<<<<< HEAD
        $this->mailData = $mailData;
    }

    public function build()
    {
        return $this->subject('Mail from ItSolutionStuff.com')
                    ->view('emails.demoMail');
=======
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Vendor Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
>>>>>>> cf2af62 (wahyu)
    }
}
