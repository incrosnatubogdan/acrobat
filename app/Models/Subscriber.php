<?php

namespace App\Models;

use App\Traits\RelationshipsTrait;
use Illuminate\Database\Eloquent\Model;

class LkpApp extends Model
{
    use RelationshipsTrait;


    protected $table = 'subscribers';

    protected $fillable = ['email'];

    protected $primaryKey = 'email';

    protected $keyType = 'string';

    /**
     * Disable timestamps
     *
     * @var bool
     */
    public $timestamps = false;

    public function safeDelete()
    {
        try {
            $this->delete();

            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }
}
