<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = ['name', 'description', 'image'];

    public function technologies()
    {
        return $this->belongsToMany(
            Technology::class,
            'project_technologie',
            'project_id',
            'technologie_id'
        );
    }
}
