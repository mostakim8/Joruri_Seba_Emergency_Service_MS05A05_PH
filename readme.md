1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
Id--Id means Unique. Id name is not same name in a full html file.It declear by "#" Symbol.any element find easily by getElementByID; Example:(MobileMenu,HistoryList. and let historyList = document.getElementById("history-list"))

Class-- Class name is common.I can use same name too many time in a full html file. Its declear " . " symbol. Find multiple elements their class name . Example:getElementsByClassName("card"

querySelector-- It find one element match in which is first like .class ,#id. Example:let serviceName = card.querySelector(".service-name").innerText;

querySelectorAll-- It finds all elements and return list. Example: let callButtons = document.querySelectorAll(".call-button")


2. How do you create and insert a new element into the DOM?
Answer:
-- Use create an element in memory.Example: let historyItem = document.createElement(" div ");
-- Use add the new element as a child of an existing element on the page. Example: Call history:- historyList.appendChild(historyItem)


3. What is Event Bubbling and how does it work?
Answer: 
-- Add an event listener to an element. When I Click button it starts the bottom and going from down to up their parents.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
-- It is to use just one event listener on a parent element for all of its child elements, instead of adding a separate listener to each one.This reduces the amount of memory  application uses and makes it run faster

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
--preventDefault(): It stops the default behavior of an element. I used this on the call-button's event listener. The call button is an <a> tag, and its default behavior is to try and dial a phone number. I used this assignment event.preventDefault() to stop that from happening and instead run  custom logic of deducting coins and creating a history item.

--stops the event from "bubbling up" to its parent elements.
