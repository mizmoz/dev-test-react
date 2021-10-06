# React Developer Test

## The Task

Create a page that allows the user to select a country from a list and enter their population.
This task should take 2-3 hours but don't worry if you aren't able to complete all items, just
make sure to show your understanding of the core technologies we use.

1. Fork this repo
2. Get the list of available countries from the country API in `src/api/country.js`
3. Create a form which allows the user to select a country from a dropdown and enter their population
4. Sort the countries by population
5. Allow entries to be updated
6. Allow entries to be deleted
7. Add some styling
8. When you're done commit your code and create a pull request

A basic project outline has been created to help you get started quickly but feel free to start
from scratch if you have a prefered setup.

We predominantly use React, Redux, StyledComponents, Node.js, Webpack, Babel

Feel free to use the internet including Google and Stackoverflow to help with the task

## Any questions?

Please just ask.

Good luck and thanks for taking the time to complete this task!


## Submission

In completing the task I've applied some approaches that I've found work well for large react & redux apps, when leading a team of developers of varying experience.

### What I've included
1. **Feature-first organisation**  
Managing components and their related redux boilerplate contained within its own namespace been a good way to allow scalability in our apps.
2. **Container vs Presentational**  
I loosely subscribe to the Container vs Presentational approach, as a good way to encourage a separation of concerns. Obviously the introduction of *react hooks* means this pattern could be less essential, so I'll be reviewing moving forward.

### What I haven't
1. **TDD**  
Testing didn't appear to be within scope of the brief, but I've captured some pseudo tests as an example of the tests that I'd write for this.
We've recently changed direction with how we approach unit tests within react & redux, utilising *react-testing-library*, so would be an interesting topic of conversation should my application progress.
2. **Linting**  
Obviously I have my own preferences for code style but feel its more important for a consistent codebase, so happily inherit the style guides for existing projects.
