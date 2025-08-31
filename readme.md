1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Id--Id means Unique. Id name is not same name in a full html file.It declear by "#" Symbol.any element find easily by getElementByID; Example:(MobileMenu,HistoryList. and let historyList = document.getElementById("history-list"))

class-- Class name is common.I can use same name too many time in a full html file. Its declear " . " symbol. Find multiple elements their class name . Example:(copyButton and let callButtons = document.querySelectorAll(".copy-button)

querySelector-- It find one element match in which is first like .class ,#id. Example:let serviceName = card.querySelector(".service-name").innerText;

querySelectorAll-- It finds all elements and return list. Example: let callButtons = document.querySelectorAll(".call-button")


2. How do you create and insert a new element into the DOM?

-- Use create an element in memory.Example: let historyItem = document.createElement(" div ");
-- Use add the new element as a child of an existing element on the page. Example: Call history:- historyList.appendChild(historyItem)


3. What is Event Bubbling and how does it work?
--

4. What is Event Delegation in JavaScript? Why is it useful?
--

5. What is the difference between preventDefault() and stopPropagation() methods?

--