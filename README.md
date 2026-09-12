The name of my project is -> Dev Stack

Dev stack is a website where you can see many Technologys that you can select and remove any time.

In this project i used many Technologys like 
    1. HTML
    2. Tailwind CSS
    3. JavaScript
    4. TypeScript
    5. React

3 fectures about this project
    1. When you click on the add to stack button its shows a toast popup message
    2. You can add multiple technology to the stack and any time when you can remove an item and can delete all item at one click.
    3. This website is fully responsive to all device and screen size.



Question answer
--------------------
i. JSX makes javascript more powerful. In the same component we can return HTML+JavaScript at the same time.

ii. Props is like an argument. In the conponent we can pass any object and function like props. And state is a function that makes props useful.

iii. UseState is a hook that keeps a initial value and a function. When we need an initial value and after that it can be changed that time we use useState hook.

iv. useEffect and useStake is a very useful hooks in react. We need json data to load for rendaring that data in the UI.

v. In react when we mapped a data its required a unique key so that it will perfectly rendaring.

vi. Conditional rendaring is a concept where we render an item based on its conditon . In this project i used conditonal rendaring here ->    
                <div className='mb-5'>
                    {
                        selectedTechnology.length === 0 ? (
                            <p className=''>No technology is selected yet</p>
                        ) : <p className="text-sm text-gray-400 mt-1">
                            {selectedTechnology.length} Technology Selected
                        </p>
                    }
                </div>

vii. We can pass any data from parent to its child easily using props. But when it will child to parent that time it will be confusing . At fist we need to decleat that stat to the root file. After that where need we can send it using props.