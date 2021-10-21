<template>
  <div>
    <div class="sidenav">
      <ul class="sidenav_list">
        <li class="sidenav_item" :key="index" v-for="(item, index) in SideNavData">
          <a class="sidenav_link" href="#">
            <i :class="item.class"></i>          
            <span class="sidenav_title">{{ item.title }}</span>
          </a>
        </li>
      </ul>
      <div class="mini_apps">
        <div class="mini_apps_logo_title">
          <i class="fab fa-shopify"></i>
          <span class="title">Mini Apps</span>
        </div>
        <span class="mini_apps_pro">PRO</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      SideNavData: [
        {
          title: 'My Accounts',
          class: 'fas fa-list',
        },
        {
          title: 'Transactions',
          class: 'fas fa-border-all',
        },
        {
          title: 'Manage Cards',
          class: 'fas fa-credit-card',
        },
        {
          title: 'Deposit Money',
          class: 'fas fa-wallet',
        },
        {
          title: 'Convert Money',
          class: 'fas fa-exchange-alt',
        },
        {
          title: 'Live Chat',
          class: 'fas fa-comment-alt',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidenav {
    background-color: #0E0D52;
    height: 100vh;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .sidenav_list {
      list-style: none;
      padding: 0;
      
      .sidenav_item {
        padding: 0 20px;

        .sidenav_link {
          color: #E0F5FF;
          text-decoration: none;
          display: flex;
          align-items: center;

          i {            
            width: 20px;
          }

          .sidenav_title {
            font-size: 14px;
            margin-left: 15px;
            line-height: 50px;
          }
        }
      }
    }

    .mini_apps {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid #E0F5FF;
      border-radius: 4px;
      margin: 0 15px;
      color: #E0F5FF;
      padding: 10px 15px;

      .mini_apps_logo_title {
        font-size: 14px;
        font-weight: bold;

        .title {
          margin-left: 10px;
        }
      }

      .mini_apps_pro {
        border: 1px solid #E0F5FF;
        border-radius: 4px;
        padding: 0 2px;
        font-size: 12px;
      }
    }
  }
</style>