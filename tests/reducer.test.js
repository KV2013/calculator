import reducers from "../src/js/redux/reducer";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    expressionStack: [],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [],
    currentTheme: "dark",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [],
      currentTheme: "dark",
      themeRequestError: null,
    },
    { type: "FETCH_THEMES_REQUESTED" }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [],
    currentTheme: "dark",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [],
      currentTheme: "dark",
      themeRequestError: null,
    },
    {
      type: "FETCH_THEMES_SUCCEEDED",
      payload: {
        themes: [
          {
            name: "indigo",
            backgroundColor: "bg-indigo-900",
            borderColor: "bg-indigo-900",
            expression: { fontColor: "text-white" },
            history: { fontColor: "text-white" },
            systemButtons: {
              backgroundColor: "bg-indigo-300",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-indigo-200",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-indigo-400",
                fontColor: "active:text-black",
              },
            },
            systemButtonsActive: {
              backgroundColor: "bg-teal-400",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-teal-300",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-teal-500",
                fontColor: "active:text-black",
              },
            },
            operationsButtons: {
              backgroundColor: "bg-indigo-500",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-indigo-400",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-indigo-600",
                fontColor: "active:text-white",
              },
            },
            numberButtons: {
              backgroundColor: "bg-indigo-800",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-indigo-700",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-indigo-900",
                fontColor: "active:text-white",
              },
            },
            settingsButton: {
              backgroundColor: "bg-indigo-900",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-indigo-800",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-indigo-700",
                fontColor: "active:text-white",
              },
            },
          },
          {
            name: "green",
            backgroundColor: "bg-green-900",
            borderColor: "bg-green-900",
            expression: { fontColor: "text-white" },
            history: { fontColor: "text-white" },
            systemButtons: {
              backgroundColor: "bg-green-300",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-green-200",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-green-400",
                fontColor: "active:text-black",
              },
            },
            systemButtonsActive: {
              backgroundColor: "bg-teal-400",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-teal-300",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-teal-500",
                fontColor: "active:text-black",
              },
            },
            operationsButtons: {
              backgroundColor: "bg-green-500",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-green-400",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-green-600",
                fontColor: "active:text-white",
              },
            },
            numberButtons: {
              backgroundColor: "bg-green-800",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-green-700",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-green-900",
                fontColor: "active:text-white",
              },
            },
            settingsButton: {
              backgroundColor: "bg-green-900",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-green-800",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-green-700",
                fontColor: "active:text-white",
              },
            },
          },
          {
            name: "teal",
            backgroundColor: "bg-teal-900",
            borderColor: "bg-teal-900",
            expression: { fontColor: "text-white" },
            history: { fontColor: "text-white" },
            systemButtons: {
              backgroundColor: "bg-teal-300",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-teal-200",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-teal-400",
                fontColor: "active:text-black",
              },
            },
            systemButtonsActive: {
              backgroundColor: "bg-green-600",
              fontColor: "text-black",
              hover: {
                backgroundColor: "hover:bg-green-500",
                fontColor: "hover:text-black",
              },
              active: {
                backgroundColor: "active:bg-green-700",
                fontColor: "active:text-black",
              },
            },
            operationsButtons: {
              backgroundColor: "bg-teal-500",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-teal-400",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-teal-600",
                fontColor: "active:text-white",
              },
            },
            numberButtons: {
              backgroundColor: "bg-teal-800",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-teal-700",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-teal-900",
                fontColor: "active:text-white",
              },
            },
            settingsButton: {
              backgroundColor: "bg-teal-900",
              fontColor: "text-white",
              hover: {
                backgroundColor: "hover:bg-teal-800",
                fontColor: "hover:text-white",
              },
              active: {
                backgroundColor: "active:bg-teal-700",
                fontColor: "active:text-white",
              },
            },
          },
        ],
      },
    }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "dark",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "dark",
      themeRequestError: null,
    },
    { type: "THEME_SELECTED", payload: { theme: "indigo" } }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"1","isNegative":false,"isCalculated":false}'],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"1","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 4 } }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"14","isNegative":false,"isCalculated":false}'],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"7","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"7","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "DIVISION" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 2 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 3 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"30","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"30","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"300","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"300","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MINUS" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"11","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"11","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 7 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"117","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"117","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "," } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175.","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 5 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"14","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"77","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"2","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"3000","isNegative":false,"isCalculated":false}',
      "MINUS",
      '{"value":"1175.5","isNegative":false,"isCalculated":false}',
    ],
    history: [],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      history: [],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"4200","isNegative":true,"isCalculated":true}'],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "MULTIPLY" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "NEGATIVE_NUMBER_MODE_ENABLED" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":true,"isCalculated":true}',
      "MULTIPLY",
      '{"value":"1","isNegative":true,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":true}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: true,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: true,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "NEGATIVE_NUMBER_MODE_DISABLED" }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: "DIVISION" } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":false}',
      "DIVISION",
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 1 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"1","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"1","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"10","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"10","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "APPEND_TO_EXPRESSION", payload: { input: 0 } }
  );
  expect(state).toEqual({
    expressionStack: [
      '{"value":"4200","isNegative":false,"isCalculated":false}',
      "DIVISION",
      '{"value":"100","isNegative":false,"isCalculated":false}',
    ],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"100","isNegative":false,"isCalculated":false}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "CALCULATE_EXPRESSION" }
  );
  expect(state).toEqual({
    expressionStack: ['{"value":"42","isNegative":false,"isCalculated":true}'],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"100","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
  state = reducers(
    {
      expressionStack: [
        '{"value":"42","isNegative":false,"isCalculated":true}',
      ],
      history: [
        [
          '{"value":"14","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"77","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"2","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"3000","isNegative":false,"isCalculated":false}',
          "MINUS",
          '{"value":"1175.5","isNegative":false,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":true,"isCalculated":true}',
          "MULTIPLY",
          '{"value":"1","isNegative":true,"isCalculated":false}',
        ],
        [
          '{"value":"4200","isNegative":false,"isCalculated":false}',
          "DIVISION",
          '{"value":"100","isNegative":false,"isCalculated":false}',
        ],
      ],
      negativeNumberMode: false,
      defaultThemes: [
        {
          name: "dark",
          backgroundColor: "bg-black",
          borderColor: "border-black",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-black",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
        {
          name: "white",
          backgroundColor: "bg-gray-300",
          borderColor: "border-gray-300",
          expression: { fontColor: "text-black" },
          history: { fontColor: "text-black" },
          systemButtons: {
            backgroundColor: "bg-gray-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-gray-500",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-orange-400",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-orange-300",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-orange-500",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-gray-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-gray-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-gray-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-gray-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-gray-900",
              fontColor: "active:text-black",
            },
          },
        },
      ],
      fetchedThemes: [
        {
          name: "indigo",
          backgroundColor: "bg-indigo-900",
          borderColor: "bg-indigo-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-indigo-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-indigo-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-indigo-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-indigo-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-indigo-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-indigo-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-indigo-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-indigo-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "green",
          backgroundColor: "bg-green-900",
          borderColor: "bg-green-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-green-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-teal-400",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-300",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-500",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-green-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-green-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-green-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-green-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-white",
            },
          },
        },
        {
          name: "teal",
          backgroundColor: "bg-teal-900",
          borderColor: "bg-teal-900",
          expression: { fontColor: "text-white" },
          history: { fontColor: "text-white" },
          systemButtons: {
            backgroundColor: "bg-teal-300",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-teal-200",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-teal-400",
              fontColor: "active:text-black",
            },
          },
          systemButtonsActive: {
            backgroundColor: "bg-green-600",
            fontColor: "text-black",
            hover: {
              backgroundColor: "hover:bg-green-500",
              fontColor: "hover:text-black",
            },
            active: {
              backgroundColor: "active:bg-green-700",
              fontColor: "active:text-black",
            },
          },
          operationsButtons: {
            backgroundColor: "bg-teal-500",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-400",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-600",
              fontColor: "active:text-white",
            },
          },
          numberButtons: {
            backgroundColor: "bg-teal-800",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-700",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-900",
              fontColor: "active:text-white",
            },
          },
          settingsButton: {
            backgroundColor: "bg-teal-900",
            fontColor: "text-white",
            hover: {
              backgroundColor: "hover:bg-teal-800",
              fontColor: "hover:text-white",
            },
            active: {
              backgroundColor: "active:bg-teal-700",
              fontColor: "active:text-white",
            },
          },
        },
      ],
      currentTheme: "indigo",
      themeRequestError: null,
    },
    { type: "ALL_CLEAR" }
  );
  expect(state).toEqual({
    expressionStack: [],
    history: [
      [
        '{"value":"14","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"77","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"2","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"3000","isNegative":false,"isCalculated":false}',
        "MINUS",
        '{"value":"1175.5","isNegative":false,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":true,"isCalculated":true}',
        "MULTIPLY",
        '{"value":"1","isNegative":true,"isCalculated":false}',
      ],
      [
        '{"value":"4200","isNegative":false,"isCalculated":false}',
        "DIVISION",
        '{"value":"100","isNegative":false,"isCalculated":false}',
      ],
    ],
    negativeNumberMode: false,
    defaultThemes: [
      {
        name: "dark",
        backgroundColor: "bg-black",
        borderColor: "border-black",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-black",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
      {
        name: "white",
        backgroundColor: "bg-gray-300",
        borderColor: "border-gray-300",
        expression: { fontColor: "text-black" },
        history: { fontColor: "text-black" },
        systemButtons: {
          backgroundColor: "bg-gray-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-gray-500",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-orange-400",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-orange-300",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-orange-500",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-gray-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-gray-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-gray-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-gray-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-gray-900",
            fontColor: "active:text-black",
          },
        },
      },
    ],
    fetchedThemes: [
      {
        name: "indigo",
        backgroundColor: "bg-indigo-900",
        borderColor: "bg-indigo-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-indigo-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-indigo-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-indigo-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-indigo-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-indigo-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-indigo-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-indigo-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-indigo-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "green",
        backgroundColor: "bg-green-900",
        borderColor: "bg-green-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-green-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-teal-400",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-300",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-500",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-green-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-green-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-green-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-green-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-white",
          },
        },
      },
      {
        name: "teal",
        backgroundColor: "bg-teal-900",
        borderColor: "bg-teal-900",
        expression: { fontColor: "text-white" },
        history: { fontColor: "text-white" },
        systemButtons: {
          backgroundColor: "bg-teal-300",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-teal-200",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-teal-400",
            fontColor: "active:text-black",
          },
        },
        systemButtonsActive: {
          backgroundColor: "bg-green-600",
          fontColor: "text-black",
          hover: {
            backgroundColor: "hover:bg-green-500",
            fontColor: "hover:text-black",
          },
          active: {
            backgroundColor: "active:bg-green-700",
            fontColor: "active:text-black",
          },
        },
        operationsButtons: {
          backgroundColor: "bg-teal-500",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-400",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-600",
            fontColor: "active:text-white",
          },
        },
        numberButtons: {
          backgroundColor: "bg-teal-800",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-700",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-900",
            fontColor: "active:text-white",
          },
        },
        settingsButton: {
          backgroundColor: "bg-teal-900",
          fontColor: "text-white",
          hover: {
            backgroundColor: "hover:bg-teal-800",
            fontColor: "hover:text-white",
          },
          active: {
            backgroundColor: "active:bg-teal-700",
            fontColor: "active:text-white",
          },
        },
      },
    ],
    currentTheme: "indigo",
    themeRequestError: null,
  });
});
