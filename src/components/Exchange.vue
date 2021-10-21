<template>
  <div>
    <div class="exchange">
      <div class="exchange-rates">
        <div class="send">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="currency_wrapper">
                <span class="currency">{{ SendCurrency }}</span>
              </div>
              <div class="available_amount">
                <span class="amount">564.43</span>
                <span>Available</span>
              </div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li
                :key="index"
                v-for="(item, index) in CurrenciesRate"
                @click="chooseCurrency(item.name, item.rate, 'send'), changeAmount('send')"
                class="dropdown-item"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="amount_input">
            <input
              type="number"
              v-model="SendAmount"
              @keyup="changeAmount('send')"
              placeholder="You Send"
            />
          </div>
        </div>
        <div class="exchange_details">
          <div class="exchange_fees">
            <span class="icon"></span>
            <span class="data">3.67 {{ SendCurrency }} fees</span>
          </div>
          <div class="exchange_rate">
            <span class="icon"></span>
            <span class="data"
              >{{ ExchangeRate }} {{ ReceiveCurrency }} exchange rate</span
            >
          </div>
        </div>
        <div class="receive">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="currency_wrapper">
                <span class="currency">{{ ReceiveCurrency }}</span>
              </div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li
                :key="index"
                v-for="(item, index) in CurrenciesRate"
                @click="chooseCurrency(item.name, item.rate, 'receive'), changeAmount('receive')"
                class="dropdown-item"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="amount_input">
            <input
              type="number"
              v-model="ReceiveAmount"
              @keyup="changeAmount('receive')"
              placeholder="Recipient gets"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exchange",
  data() {
    return {
      SendCurrency: "USD",
      SendAmount: '',
      ReceiveCurrency: "EUR",
      ReceiveAmount: '',
      ExchangeRate: 0.815894,
      CurrenciesRate: [
        {
          name: "USD",
          rate: 1,
        },
        {
          name: "EUR",
          rate: 0.815894,
        },
        {
          name: "CAD",
          rate: 1.204355,
        },
        {
          name: "GBP",
          rate: 0.70602,
        },
        {
          name: "MXN",
          rate: 19.88162,
        },
        {
          name: "PLN",
          rate: 3.66121,
        },
      ],
    };
  },
  methods: {
    chooseCurrency(name, rate, type) {
      if (type == "send") {
        this.SendCurrency = name;
      } else {
        this.ReceiveCurrency = name;
        this.ExchangeRate = rate;
      }
    },
    changeAmount(type) {
      if (type == "send") {
        this.ReceiveAmount = this.SendAmount * this.ExchangeRate;
      } else {
        this.SendAmount = this.ReceiveAmount / this.ExchangeRate;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.exchange {
  display: flex;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
  height: 100vh;

  .exchange-rates {
    position: relative;
    width: 450px;
    height: 400px;
    background-color: #edf6ff;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      left: 20px;
      top: 0;
      background-color: transparent;
      border-left: 2px dashed #234afb;
    }

    .exchange_details {
      position: absolute;
      top: 42%;
      left: 10px;

      .exchange_fees,
      .exchange_rate {
        display: flex;
        align-items: center;

        .icon {
          width: 20px;
          height: 20px;
          background-color: #fff;
          border: 0.5px solid #234afb;
          border-radius: 50%;
        }

        .data {
          margin-left: 20px;
          font-weight: bold;
        }
      }

      .exchange_fees {
        margin-bottom: 30px;
      }
    }

    .send,
    .receive {
      position: absolute;
      right: -25px;
      display: flex;

      .dropdown {
        max-height: 100px;

        .dropdown-toggle {
          background: #ffffff;
          box-shadow: 0px 3px 7px #d7d9de;
          color: #000;
          padding: 30px 25px;
          margin-right: 7px;
          height: 100%;
          border: 0;
          border-radius: 8px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-width: 200px;

          .currency_wrapper {
            .currency {
              font-size: 15px;
            }
          }

          .available_amount {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            margin-left: 20px;
            margin-right: 15px;

            .amount {
              font-size: 22px;
              font-weight: 600;
            }
          }
        }

        .dropdown-menu {
          .dropdown-item {
            cursor: pointer;
          }
        }
      }

      .amount_input {
        display: flex;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px 3px 7px #d7d9de;
        border-radius: 8px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 30px 25px;
        max-height: 100px;
        width: 300px;

        input {
          border: 1px solid #2e3a42;
          box-sizing: border-box;
          border-radius: 6px;
          font-size: 16px;
          padding: 15px;
          width: 100%;
        }
      }
    }

    .send {
      top: 0;
    }

    .receive {
      bottom: 0;
    }
  }
}

// Remove Inputs Number Arrows

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>