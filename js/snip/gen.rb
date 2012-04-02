#!/usr/bin/env ruby
# coding: utf-8

require 'erb'

if ARGV.size == 0
  STDERR.puts "ERBファイルが指定されていません!!"
  exit 1
end

unless File.exists?(ARGV[0])
  STDERR.puts "ファイルじゃない!!"
  exit 1
end

erb = open(ARGV[0]) {|f| ERB.new(f.read) }
filename_suffix = File.basename(ARGV[0], '.erb')

100.times do |i|
  script = erb.result(binding)
  filename = "#{i}-#{filename_suffix}"
  open(filename, "w") {|f| f.write script }
  puts "#{filename} を作成しました"
end
puts "ファイル作成完了!"
