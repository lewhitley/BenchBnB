# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'lindsey', password: '123456'})

Bench.create({description: 'pretty', lat: '12.0', lng: '12.0'})
Bench.create({description: 'ugly', lat: '0.0', lng: '1.3'})
Bench.create({description: 'clean', lat: '4.7', lng: '1.9'})
Bench.create({description: 'nice', lat: '3.9', lng: '7.3'})
Bench.create({description: 'great view', lat: '11.2', lng: '10.3'})
Bench.create({description: 'great location', lat: '8.2', lng: '6.5'})
Bench.create({description: 'comfy', lat: '7.2', lng: '9.1'})
