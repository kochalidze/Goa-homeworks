from turtle import *


speed(30)

width(7)

color("blue")

forward(200)
left(90)


forward(200)
left(90)

forward(200)
left(90)


forward(200)
left(90)

forward(70)
color("red")
begin_fill()
left(90)
forward(120) 
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

color("black")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


penup()
goto(120, 120)
pendown()

penup()
right(60)
forward(60)
forward(20)
pendown()

begin_fill()
right(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
end_fill()

penup()
goto(150, 150)
pendown()

begin_fill()
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()
exitonclick()