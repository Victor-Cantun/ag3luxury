<?php

use App\Models\Hotel;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        Permission::create(['name' => 'create_hotels']);
        Permission::create(['name' => 'read_hotels']);
        Permission::create(['name' => 'update_hotels']);
        Permission::create(['name' => 'delete_hotels']);

        $super_admin = Role::findByName('Super-Admin');
        $super_admin->givePermissionTo([
            'create_hotels',
            'read_hotels',
            'update_hotels',
            'delete_hotels'
            ]);
    }
}