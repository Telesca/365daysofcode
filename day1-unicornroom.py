from sys import exit
 
def dead(why):
	print why, "Run!"
	exit(0)
 
def hornroom():
	print "You are in the lavish horn room filled with beautiful Persian rugs and jewels."
	print "You see unicorn horns in a pile. How many do you grab?"
	hornstealer = raw_input("> ")
	if "0" in hornstealer or "1" in hornstealer or "2" in hornstealer or "3" in hornstealer or "4" in hornstealer:
		how_much = int(hornstealer)
	else:
		dead("That is too many.")	
	if how_much < 100:
		print "You will live forever."
		exit(0)	
	else:
		dead("Too many. The unicorns come for you.")
	
 
 
def poker_room():
	print "There are unicorns here, sitting around a table smoking and playing cards."
	print "Some have horns. Some do not."
	print "One without a horn approaches you."
	print "Do you suggest he is more horse than unicorn? (yes or no)"
	
	dialogue = raw_input(">")
	if "yes" in dialogue or "Yes" in dialogue:
		dead( "He still has his teeth, dude. You're dead meat.")
		exit(0)
	else:
		print "Smart move. He hands you a whiskey and asks you to sit down."
 
def start():
	print "Welcome to the unicorn fun house."
	print "What is your name?"
	name = raw_input(">"  )
	print "Hi, %s."  % name	
	print "You are in a hallway and can go right or left." 
	print "The left smells like cookies and the right smells like cigarettes."
	print "There is a door to your right and left."
	print "Which one do you take?"
	
	next = raw_input("> ")
	
	if next == "left":
		hornroom()
	elif next == "right":
		poker_room()
	else:
		dead("Oh, you're dead. Caught by an evil unicorn.")
		
start()