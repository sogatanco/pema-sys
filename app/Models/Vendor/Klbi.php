<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Model;

class Klbi extends Model
{
    protected $connection ='mysql2';
    protected $table = 'klbi';
    protected $primaryKey='id';
}
