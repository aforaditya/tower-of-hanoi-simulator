import React from 'react'

function About() {
    return (
        <div className='text-white flex flex-col gap-6' style={{fontFamily:'Bacasime Antique'}}>
            <h1 className='text-xl'>About Tower of Hanoi</h1>
            <p>The Tower of Hanoi is a fascinating mathematical puzzle that has enthralled generations of problem solvers. It was invented by the French mathematician Édouard Lucas in the 19th century and has since become an enduring symbol of logical thinking and strategic problem-solving.
At first glance, the Tower of Hanoi appears deceptively simple. The puzzle consists of three rods and a series of disks of different sizes, each with a hole in the center. The disks are initially stacked in ascending order of size on one rod, forming a tower. The objective is to transfer the entire tower from the starting rod to another rod, while following two fundamental rules:</p>
            <ul>
                <li>Only one disk can be moved at a time.</li>
                <li>A larger disk should never be placed on top of a smaller disk.</li>
            </ul>

            <p>These seemingly straightforward rules give rise to a remarkably intricate challenge. As the number of disks increases, the puzzle becomes exponentially more complex, testing the limits of logical reasoning and strategic thinking. Solving the Tower of Hanoi requires careful planning and an understanding of the underlying patterns and principles.</p>

            <p>One of the remarkable features of the Tower of Hanoi is its recursive nature. The puzzle can be broken down into a series of smaller, similar subproblems, making it an ideal candidate for recursive algorithms. This recursive nature has captured the attention of mathematicians and computer scientists, serving as a cornerstone for understanding recursive thinking and problem-solving strategies.</p>

        </div>
    )
}

export default About