<?php

namespace App\Models;

use App\Models\Ordetitems;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        'user_id',
        'firstname',
        'lastname',
        'phone',
        'email',
        'address',
        'city',
        'state',
        'zipcode',
        'payment_id',
        'payment_mode',
        'tracking_no',
        'status',
        'remark'
    ];
    public function orderitems(){
        return $this->hasMany(Ordetitems::class,'order_id','id');
    }
}
