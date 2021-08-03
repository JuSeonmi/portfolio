<template>
<div class="about">
	<UserIcon />
	<h2>Profile</h2>
	<div class="profile">
		<p>이름: 주선미</p>
		<p>생년월일: 1986.05.10</p>
		<p>혈액형: O형</p>
		<p>좌우명: 새롭고 자유로운 영혼으로 행복하게 살아가자.</p>
		<p>좋아하는 일: 산책, 요가, 독립출판 읽기, 식물키우기, 혼술</p>
	</div>

	<GitCommitIcon />
	<h2>Career Path</h2>
	<ul class="careerList">
		<li>
			<span class="date">2015.08 ~ 현재</span>
			<div class="detail">
				- N Tech Service TV&사전 UI개발팀
			</div>
		</li>
		
		<li>
			<p class="date">2015.06~2015.08</p>
			<div class="detail">
				- ebay korea 프리랜서
			</div>
		</li>
		<li>
			<p class="date">2015.04~2015.05</p>
			<div class="detail">
				- sk planet 프리랜서
			</div>
		</li>
		<li>
			<p class="date">2013.06~2015.02</p>
			<div class="detail">
				- 플립커뮤니케이션 크리에이티브그룹 UX팀 퍼블리싱파트
			</div>
		</li>
		<li>
			<p class="date">2013.03~2013.05</p>
			<div class="detail">
				- (주)이파트 웹구축 2팀 퍼블리싱 파트
			</div>
		</li>
		<li>
			<p class="date">2011.05~2013.02      
			<div class="detail">
				- (주)세포활성연구소 디자인 및 퍼블리싱 파트
			</div>
		</li>
		<li>
			<span class="date">2005.03~2011.02</span>
			<div class="detail">
				- 홍익대학교 회화과 졸업
			</div>
		</li>
	</ul>
		
</div>
</template>
<script>

import { CheckIcon, UserIcon, GitCommitIcon } from 'vue-feather-icons'
export default {
  	components: {
		CheckIcon,
		UserIcon,
		GitCommitIcon
		
	},
}
</script>
<style lang="scss" scoped>

.profile {
	margin: 20px 0 30px;

	p {
		margin-top: 5px;
	}
	
}
.careerList {
	margin-top: 20px; 
	.icon_check {
		vertical-align: middle;
	}
	li {
		margin-top: 15px;
		list-style: none;

		&:first-child {
			margin-top: 0;
		}
	}
	.date {
		font-weight: bold;
	}
	.detail {
		margin-top: 5px;
	}
}

.profile, 
.careerList {
	padding: 20px; 
	background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
	.about {
		margin-top: 30px;
		padding-top: 20px;
		border-top: 1px solid #4e4e4e;

	}
}

.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

