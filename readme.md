# Interactive Graphics with ggplot2 and gridSVG

Interactive statistical graphics can be useful in data analysis and reporting. They allow supplemental information to be displayed along with a standard chart, without diluting the main message. The package ggplot2 provides a powerful interface for creating high quality statistical graphics, while gridSVG converts grid graphics objects to svg objects that can be rendered in web browsers. We combine the two, along with a bit of JavaScript, to create interactive statistical graphics for use on the web. The idea is illustrated with examples for plotting receiver operating characteristic curves, and Kaplan-Meier survival curves, with interactive features bound to hover and click events. This approach differs from many others in that the figure rendering is handled by R, instead of a JavaScript library. JavaScript is used instead to bind interactive events to the svg objects. Our interface is based on the main strengths of R: the statistical computations and graphics rendering allowing for seamless transitions between static and interactive plots, retaining the R/ggplot2 style and allowing visual consistency across document types. 

[Slides](https://sachsmc.github.io/UseR2015-Talk)


## License

These materials are public domain and made available with a [Creative Commons CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/legalcode) dedication. In short, I waive all rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute, and perform the work, even for commercial purposes, all without asking permission. I make no warranties about the work, and disclaim liability for all uses of the work, to the fullest extent permitted by applicable law.
