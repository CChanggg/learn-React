import { MemberEntity } from '../../model'
import { members } from './mockData'
let mockMembers = members;
// ajax 数据通信
const baseURL = 'https://api.github.com/orgs/lemoncode';
// fetchMembers 声明这个函数是Promise类型
// Promise 类型必须要参数 resolve数据的泛型
const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(mockMembers)
}
// fetch 天生的promise
const fetchMembersAsync = (): Promise<MemberEntity[]> => {
  const memberURL=`${baseURL}/members`;
  return fetch(memberURL)
      .then((response) => response.json())
      .then(mapToMembers)
}
// 遍历
const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
  return githubMembers.map(mapToMember)
}
const mapToMember = (githubMember): MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  }
}

const saveMember = (member: MemberEntity): Promise<boolean> => {
  const index = mockMembers.findIndex(m => m.id === member.id)
  updateMember(member, index);
  insertMember(member);

  return Promise.resolve(true);
}

const insertMember = (member: MemberEntity) => {
  member.id = mockMembers.length;
  mockMembers = [
    ...mockMembers,
    member
  ]
}

const updateMember = (member: MemberEntity, index: number) => {
  //mockMembers
  mockMembers = [
    ...mockMembers.slice(0,index),
    member,
    ...mockMembers.slice(index +1)
  ]
}
const fetchMemberById = (id: number): Promise<MemberEntity> => {
  const member = mockMembers.find(m => m.id === id)
  return Promise.resolve(member);
}
export const memberAPI = {
  fetchMembers,
  fetchMembersAsync,
  saveMember,
  fetchMemberById
  // 根据id 取出member 显示出来 state 更新一下
  //- login''
}
