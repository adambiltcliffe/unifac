from __future__ import division
import pygame
import settings, vista, img

def offset(edge, p0 = (0, 0)):
	x0, y0 = p0
	return x0 + [0, -1, 0, 1][edge], y0 + [1, 0, -1, 0][edge]

def clamp(x, a, b):
	return a if x < a else b if x > b else x
		
class Part(object):
	ismodule = True
	color = 100, 100, 100
	def __init__(self, name, blocks, inputs, outputs):
		self.name = name
		self.blocks = list(blocks)
		xs, ys = zip(*blocks)
		self.center = (max(xs) + min(xs) + 1) / 2, (max(ys) + min(ys) + 1) / 2
		self.inputs = list(inputs)
		self.outputs = list(outputs)

	def shift(self, (dx, dy)):
		blocks = [(x + dx, y + dy) for x, y in self.blocks]
		inputs = [(x0 + dx, y0 + dy, x1 + dx, y1 + dy) for x0, y0, x1, y1 in self.inputs]
		outputs = [(x0 + dx, y0 + dy, x1 + dx, y1 + dy) for x0, y0, x1, y1 in self.outputs]
		p = Part(self.name, blocks, inputs, outputs)
		p.ismodule = self.ismodule
		return p

	def nearest(self, (x, y)):
		xs, ys = zip(*self.blocks)
		xmin, xmax = -min(xs), settings.shipw - max(xs) - 1
		ymin, ymax = -min(ys), settings.shiph - max(ys) - 1
		dx = clamp(int(round(x - self.center[0])), xmin, xmax)
		dy = clamp(int(round(y - self.center[1])), ymin, ymax)
		return self.shift((dx, dy))

	def draw(self, screenpos0, blocksize, bad = False):
		x0, y0 = screenpos0
		d = int(blocksize * 0.1)
		for x, y in self.blocks:
			px = x0 + blocksize * x + d
			py = y0 + blocksize * y + d
			rect = px, py, blocksize - 2 * d, blocksize - 2 * d
			color = (100, 0, 0) if bad else self.color
			vista.screen.fill(color, rect)
		px = int(x0 + blocksize * self.center[0])
		py = int(y0 + blocksize * self.center[1])
		img.drawtext(self.name, 14, center = (px, py))

	def contains(self, (x, y)):
		return (int(x), int(y)) in self.blocks

class Conduit(Part):
	ismodule = False
	def __init__(self, oedges, rot = 0):
		self.oedges = oedges
		self.rot = rot
		name = "conduit-%s" % ("".join(map(str, oedges)))
		blocks = [(0, 0)]
		inputs = [offset(rot) + (0, 0)]
		outputs = [(0, 0) + offset((rot + oedge) % 4) for oedge in oedges]
		Part.__init__(self, name, blocks, inputs, outputs)

	def rotate(self, n = 1):
		return Conduit(self.oedges, (self.rot + n) % 4)

def Module(modulename):
	return Part(modulename, settings.moduleblocks[modulename], settings.moduleinputs[modulename], [])



