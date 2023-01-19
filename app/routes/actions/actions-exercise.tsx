import { useEffect } from "react";
import { createMachine, interpret } from "xstate";

let product_selector_machine = createMachine({
  initial: "idle",
  states: {
    idle: {
      on: {
        VIEW_PRODUCT_LINE: {
          target: "product_line",
          actions: ["select_product_line"],
        },
        VIEW_ORDER: {
          target: "view_order",
        },
      },
    },
    product_line: {
      on: {
        SELECT_PRODUCT: {
          target: "view_product",
          actions: ["select_product"],
        },
        BACK: {
          target: "idle",
        },
      },
    },
    view_product: {
      on: {
        ADD_PRODUCT_TO_ORDER: {
          target: "adding_product",
          actions: ["add_product_to_order"],
        },
        BACK: {

          target: "product_line",
        },
      },
    },
    adding_product: {
      on: {
        PRODUCT_ADDED: {
          target: "view_order",
        },
        PRODUCT_ADDITION_FAILED: {
          target: "retry_product_addition",
        },
      },
    },
    retry_product_addition: {
      on: {
        PRODUCT_ADDED: {
          target: "view_order",
        },
        PRODUCT_ADDITION_FAILED: {
          target: "product_added_failure",
        },
      },
    },
    product_added_failure: {},
    view_order: {
      on: {
        SUBMIT_ORDER: {
          target: "submitting_order",
        },
        SAVE_ORDER_FOR_LATER: {
          target: "saving_order",
        },
        ADD_ANOTHER_PRODUCT: {
          target: "idle",
        },
      },
    },
    submitting_order: {
      on: {
        ORDER_SUBMITTED: {
          target: "order_successfully_submitted",
        },
        ORDER_SUBMISSION_FAILED: {
          target: "retry_order_submission",
        },
      },
    },
    order_successfully_submitted: {},
    retry_order_submission: {
      on: {
        ORDER_SUBMITTED: {
          target: "order_successfully_submitted",
        },
        ORDER_SUBMISSION_FAILED: {
          target: "order_submission_failure",
        },
      },
    },
    order_submission_failure: {},
    saving_order: {
      on: {
        ORDER_SAVED: {
          target: "order_successfully_saved",
        },
        ORDER_SUBMISSION_FAILED: {
          target: "retry_saving_order",
        },
      },
    },
    order_successfully_saved: {},
    retry_saving_order: {
      on: {
        ORDER_SAVED: {
          target: "order_successfully_saved",
        },
        ORDER_SUBMISSION_FAILED: {
          target: "order_saving_failure",
        },
      },
    },
    order_saving_failure: {},
  },
}).withConfig({
  actions: {
    select_product_line: (context, event) => {
      console.log("select product line");
    },
    select_product: (context, event) => {
      console.log("select_product");
    },
    add_product_to_order: (context, event) => {
      console.log("add_product_to_order");
    },
    submit_order: (context, event) => {
      console.log("submit_order");
    },
    save_order_for_later: (context, event) => {
      console.log("save_order_for_later");
    },
    add_another_product: (context, event) => {
      console.log("add_another_product");
    },
    product_added: (context, event) => {
      console.log("product_added");
    },
    product_addition_failed: (context, event) => {
      console.log("product_addition_failed");
    },
    order_submitted: (context, event) => {
      console.log("order_submitted");
    },
    order_submission_failed: (context, event) => {
      console.log("order_submission_failed");
    },
    order_saved: (context, event) => {
      console.log("order_saved");
    },
    order_saving_failed: (context, event) => {
      console.log("order_saving_failed");
    },
  },
});

// create a function that randomly returns a number between 1 and  4
function random_number() {
  return Math.floor(Math.random() * 4) + 1;
}

export default function XStateGettingStartedRoute() {
  useEffect(() => {
    const service = interpret(product_selector_machine).start();

    window.service = service;
    window.send = service.send;
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Getting Started</h1>
    </div>
  );
}
