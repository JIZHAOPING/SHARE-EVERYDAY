/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50506
Source Host           : localhost:3306
Source Database       : two-cylinder

Target Server Type    : MYSQL
Target Server Version : 50506
File Encoding         : 65001

Date: 2018-12-25 17:26:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `attention`
-- ----------------------------
DROP TABLE IF EXISTS `attention`;
CREATE TABLE `attention` (
  `uid` int(11) DEFAULT NULL,
  `aid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attention
-- ----------------------------

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `cid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `ccontent` varchar(255) NOT NULL,
  `cdate` datetime NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1', '1', '噶哈哈哈', '2018-12-25 08:24:46');

-- ----------------------------
-- Table structure for `keep`
-- ----------------------------
DROP TABLE IF EXISTS `keep`;
CREATE TABLE `keep` (
  `kid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  PRIMARY KEY (`kid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of keep
-- ----------------------------

-- ----------------------------
-- Table structure for `movement`
-- ----------------------------
DROP TABLE IF EXISTS `movement`;
CREATE TABLE `movement` (
  `mid` int(11) NOT NULL,
  `mcontent` varchar(255) NOT NULL,
  `mdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mimg` varchar(255) DEFAULT NULL,
  `mtype` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of movement
-- ----------------------------
INSERT INTO `movement` VALUES ('1', '旅途愉快', '2018-12-24 22:05:54', 'images/头像/1.jpg', '旅行', '1');
INSERT INTO `movement` VALUES ('2', '杨幂刘恺威离婚了', '2018-12-24 22:05:56', 'images/头像/1.jpg', '娱乐', '2');
INSERT INTO `movement` VALUES ('3', '考研加油', '2018-12-24 22:05:57', 'images/头像/1.jpg', '升学', '1');
INSERT INTO `movement` VALUES ('4', '教师资格证等着我', '2018-12-24 22:05:59', 'images/头像/1.jpg', '技能', '1');
INSERT INTO `movement` VALUES ('5', '又要练琴了', '2018-12-24 22:06:00', 'images/头像/1.jpg', '艺能', '2');
INSERT INTO `movement` VALUES ('6', '相亲相爱一家人', '2018-12-24 22:06:01', 'images/头像/1.jpg', '亲情', '2');
INSERT INTO `movement` VALUES ('7', '朋友一生一起走', '2018-12-24 22:06:02', 'images/头像/1.jpg', '友情', '2');
INSERT INTO `movement` VALUES ('8', '白头偕老', '2018-12-24 22:06:03', 'images/头像/1.jpg', '爱情', '1');
INSERT INTO `movement` VALUES ('9', '继续加班', '2018-12-24 22:06:04', 'images/头像/1.jpg', '工作日常', '2');
INSERT INTO `movement` VALUES ('10', '什么时候加薪啊啊啊啊', '2018-12-24 22:06:09', 'images/头像/1.jpg', '工作烦恼', '2');
INSERT INTO `movement` VALUES ('11', '八面玲珑', '2018-12-24 22:06:07', 'images/头像/1.jpg', '职场经验', '2');
INSERT INTO `movement` VALUES ('12', '健身第十天', '2018-12-24 22:06:14', 'images/头像/1.jpg', '健身', '2');

-- ----------------------------
-- Table structure for `report`
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `rid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of report
-- ----------------------------

-- ----------------------------
-- Table structure for `supergirl`
-- ----------------------------
DROP TABLE IF EXISTS `supergirl`;
CREATE TABLE `supergirl` (
  `sid` int(11) NOT NULL DEFAULT '0',
  `sname` varchar(255) NOT NULL,
  `spwd` int(11) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supergirl
-- ----------------------------
INSERT INTO `supergirl` VALUES ('1', 'gsb', '123456789');
INSERT INTO `supergirl` VALUES ('2', 'pky', '123456');
INSERT INTO `supergirl` VALUES ('3', 'jzp', '123456');
INSERT INTO `supergirl` VALUES ('4', 'wly', '123456');

-- ----------------------------
-- Table structure for `type`
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `tid` int(11) NOT NULL,
  `tname` text NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('7', '亲情');
INSERT INTO `type` VALUES ('8', '友情');
INSERT INTO `type` VALUES ('9', '爱情');
INSERT INTO `type` VALUES ('10', '旅行');
INSERT INTO `type` VALUES ('1', '升学');
INSERT INTO `type` VALUES ('2', '技能');
INSERT INTO `type` VALUES ('3', '艺能');
INSERT INTO `type` VALUES ('4', '工作日常');
INSERT INTO `type` VALUES ('11', '娱乐');
INSERT INTO `type` VALUES ('6', '职场经验');
INSERT INTO `type` VALUES ('5', '工作烦恼');
INSERT INTO `type` VALUES ('12', '健身');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `uimg` varchar(255) NOT NULL,
  `utel` bigint(20) NOT NULL,
  `upwd` varchar(255) NOT NULL,
  `udate` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '小黑', 'images/头像/1.jpg', '18931308192', '123456', '2018-12-25 15:57:49');
INSERT INTO `users` VALUES ('0', '', '', '18931308192', '123456', '0000-00-00 00:00:00');
