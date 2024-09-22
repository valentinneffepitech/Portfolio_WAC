<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class ComponentTests extends TestCase
{
    public function welcome_page_test(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page->component('Welcome'));
    }
}
