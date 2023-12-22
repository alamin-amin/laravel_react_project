<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordetitems extends Model
{
    use HasFactory;
    protected $table = 'Ordetitems';
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price'
    
    ];
}
