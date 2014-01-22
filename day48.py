## ex42 from Learn Python the Hard Way
## Zed says "You use the phrase is-a when you talk about objects and classes being related to each other by a class relationship. You use has-a when you talk about objects and classes that are related only because they reference each other."

## Animal is an object
class Animal(object):
	pass

## A dog is an animal
class Dog(Animal):

	def __init__(self, name):
	## self has-a name 
		self.name = name

## A cat is-a(n) animal:
class Cat(Animal):

	def __init__(self, name):
	## self has a name
		self.name = name

## A person is- a(n) object
class Person(object):
	#self has-a name
	def __init__(self, name):
	
	##person has-a pet of some kind
		self.pet = None

## An employee is a person 
class Employee(Person):
	#employee has a super name
	def __init__(self, name, salary):
	##Self has-a salary
		self.salary = salary

## a fish is an object
class Fish(object):
	pass
## A salmon is a fish
class Salmon(Fish):
	pass

## A Halibut is a fish
class Halibut(Fish)
	pass

## rover is-a Dog
rover = Dog("Rover")

## satan is-a cat
satan = Cat("Satan")

# mary has a pet, satan
 mary.pet = satan

 ## frank is-a employee

 frank = Employee ("Frank", 120000)

 ## frank has-a pet rover
 frank.pet = rover

 ## flipper is-a fish
 flipper = Fish()

 ## crouse is-a salmon
 crouse = Salmon()

 ## harry is a halibut
 harry = Halibut()



