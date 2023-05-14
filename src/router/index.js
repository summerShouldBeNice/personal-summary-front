// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Hello from "@/views/Hello.vue";
import Main from "@/views/Main.vue";
import PersonalManageMain from "@/views/PersonalCenter/PersonalManageMain.vue";
import PasswordManageMain from "@/views/PasswordManage/PasswordManageMain.vue";
import BlogManageMain from "@/views/BlogManage/BlogManageMain.vue";
import DiaryManageMain from "@/views/DiaryManage/DiaryManageMain.vue";
import FinanceManageMain from "@/views/FinanceManage/FinanceManageMain.vue";

Vue.use(Router)

// 路由配置
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/hello'
  },
  // 欢迎页面
  {
    path: '/hello',
    name: 'Hello',
    // component: () => import('../views/Hello.vue')
    component: Hello,
    meta: {
      title: '欢迎',
    }
  },
  // 主页面
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // 个人中心
      {
        path: 'personal_center',
        name: 'PersonalCenter',
        component: PersonalManageMain,
        meta: {
          title: '个人中心',
        }
      },
      // 密码管理
      {
        path: 'personal_password_manage',
        name: 'PasswordManageMain',
        component: PasswordManageMain,
        meta: {
          title: '密码管理',
        }
      },
      // 日记管理
      {
        path: 'personal_diary_manage',
        name: 'DiaryManageMain',
        component: DiaryManageMain,
        meta: {
          title: '日记管理',
        }
      },
      // 博客管理
      {
        path: 'personal_blog_manage',
        name: 'BlogManageMain',
        component: BlogManageMain,
        meta: {
          title: '博客管理',
        }
      },
      {
        path: 'personal_finance_manage',
        name: 'FinanceManageMain',
        component: FinanceManageMain,
        meta: {
          title: '财务管理',
        }
      },
    ]
  }
]


const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
