<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class HomepageTest extends TestCase
{
    public function test_welcome_page(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page
                ->component('Welcome'));
    }

    public function test_welcome_projects(): void
    {
        $this->get('/')
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Welcome')
                    ->has('projects', fn($projects) => is_array($projects) || !$projects)
            );
    }


    public function test_welcome_feedbacks(): void
    {
        $this->get('/')
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Welcome')
                    ->has('feedbacks', fn($feedbacks) => is_array($feedbacks) || !$feedbacks)
            );
    }
}
