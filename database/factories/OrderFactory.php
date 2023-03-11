<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      "customer" => $this->faker->name(),
      "total" => $this->faker->total(),
      "received_cash" => $this->faker->received_cash(),
      "return_cash" => $this->faker->return_cash()
    ];
  }
}
